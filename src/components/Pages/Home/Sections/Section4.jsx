import styles from "./Section4.module.scss";
import building3 from "../../../../assets/building3.jpeg";

const Section4 = () => {
	return (
		<section className={styles.section_4}>
			{/* Title */}
			<div className={styles.section_4_title}>
				<h1>
					Helping people find their dream homes for more than two decades.
				</h1>
			</div>

			{/* Content */}
			<div className={styles.section_4_content}>
				{/* Image Container */}
				<div className={styles.image_container}>
					<img src={building3} alt="building" />
				</div>

				{/* Info */}
				<div className={styles.info}>
					<p>
						Search and find your dream house for an affordable price. This is
						the Real deal.
					</p>

					<div className={styles.rows}>
						{/* Row 1 */}
						<div className={styles.row_1}>
							{/* Fact 1 */}
							<div className={styles.fact}>
								<h2>10.234</h2>
								<h3>Completed Houses</h3>
							</div>

							{/* Fact 2 */}
							<div className={styles.fact}>
								<h2>10.234</h2>
								<h3>Happy Client</h3>
							</div>
						</div>

						{/* Row 2 */}
						<div className={styles.row_1}>
							{/* Fact 1 */}
							<div className={styles.fact}>
								<h2>10.234</h2>
								<h3>Completed Houses</h3>
							</div>

							{/* Fact 2 */}
							<div className={styles.fact}>
								<h2>10.234</h2>
								<h3>Happy Client</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section4;
