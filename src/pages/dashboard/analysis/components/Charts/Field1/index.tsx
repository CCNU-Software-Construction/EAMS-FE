import React from 'react';
import styles from './index.less';

export type FieldProps = {
  label: React.ReactNode;
  value: React.ReactNode;
  label1: React.ReactNode;
  value1: React.ReactNode;
  style?: React.CSSProperties;
};

const Field: React.FC<FieldProps> = ({label, value, label1, value1, ...rest}) => (
  <div className={styles.box}>
    <div className={styles.field} {...rest}>
      <span className={styles.label}>{label}</span>
      <span className={styles.number}>{value}</span>
    </div>
    <div className={styles.field} {...rest}>
      <span className={styles.label}>{label1}</span>
      <span className={styles.number}>{value1}</span>
    </div>
  </div>
);

export default Field;
