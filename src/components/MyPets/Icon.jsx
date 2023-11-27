import icons from '../../../src/assets/icons/trash.svg'

export const Icon = ({ iconName, width, height, stroke, fill }) => {
    return (
      <svg width={width || '24px'} height={height || '24px'}>
        <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
      </svg>
    );
};