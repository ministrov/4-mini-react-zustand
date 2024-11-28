import cn from 'classnames';
import styles from './SkeletonImage.module.css';

function SkeletonImage() {
    return (
        <div className={styles["skeleton"]}>
            <div className={cn("pulse", styles["skeleton-header"])}>
                <div className={cn("pulse", styles["skeleton-circle"])}></div>
                <div className={cn("pulse", styles["skeleton-mini"])}></div>
            </div>
            <div className={cn("pulse", styles["skeleton-block"])}></div>
            <div className={cn("pulse", styles["skeleton-block"])}></div>
            <div className={cn("pulse", styles["skeleton-block"])}></div>
        </div>
    )
}

export default SkeletonImage;
