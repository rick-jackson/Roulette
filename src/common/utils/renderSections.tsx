import type { Section } from "../../types/section";

export const renderSections = (sections: Section[]) => {
  const anglePerSection = 360 / sections.length;
  return sections.map((section, index) => {
    const startAngle = anglePerSection * index;
    const endAngle = anglePerSection * (index + 1);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    const x1 = 200 + 180 * Math.cos((Math.PI * startAngle) / 180);
    const y1 = 200 + 180 * Math.sin((Math.PI * startAngle) / 180);
    const x2 = 200 + 180 * Math.cos((Math.PI * endAngle) / 180);
    const y2 = 200 + 180 * Math.sin((Math.PI * endAngle) / 180);

    const textAngle = (startAngle + endAngle) / 2;
    const textX = 200 + 100 * Math.cos((Math.PI * textAngle) / 180);
    const textY = 200 + 100 * Math.sin((Math.PI * textAngle) / 180);

    return (
      <g key={index}>
        <path
          d={`M200,200 L${x1},${y1} A180,180 0 ${largeArcFlag},1 ${x2},${y2} Z`}
          fill={section.color}
        />
        <text
          x={textX}
          y={textY}
          fill="black"
          fontSize="16"
          textAnchor="middle"
          alignmentBaseline="middle"
          transform={`rotate(${textAngle}, ${textX}, ${textY})`}
        >
          {section.label}
        </text>
      </g>
    );
  });
};
