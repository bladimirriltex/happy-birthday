<template>
    <svg class="countdown-svg">
      <path
        :style="`fill: none; stroke: url(#grad); stroke-width: 4; stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset};`"
        :d="describeArc(50, 50, 48, 0, radius)"
      />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #f5772a;" />
          <stop offset="100%" style="stop-color: #ffebbc;" />
        </linearGradient>
      </defs>
    </svg>
  </template>
  
  <script>
  export default {
    props: ['radius'],
    computed: {
      circumference() {
        const circleLength = Math.PI * 2 * 48;
        return circleLength;
      },
      strokeDashoffset() {
        const circleLength = this.circumference;
        const offset = circleLength * ((360 - this.radius) / 360);
        return offset;
      },
    },
    methods: {
      polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  
        return {
          x: centerX + radius * Math.cos(angleInRadians),
          y: centerY + radius * Math.sin(angleInRadians),
        };
      },
      describeArc(x, y, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(x, y, radius, endAngle);
        const end = this.polarToCartesian(x, y, radius, startAngle);
  
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  
        return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
      },
    },
  };
  </script>
  