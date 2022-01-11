import { ArrowButton } from "../../../Buttons/Buttons";
import styles from "./Section2.module.scss";
import building2 from "../../../../assets/building2.jpeg";

const Section2 = () => {
	return (
		<section className={styles.section2}>
			{/* Image */}
			<div className={styles.section2_image_container}>
				<img src={building2} alt="building2" />
			</div>

			{/* Call to Action */}
			<div className={styles.section_2_slogan}>
				<h1>
					Whether you're buying, selling, or renting, we can really help you get
					it started.
				</h1>
			</div>

			{/* Selection */}
			<div className={styles.selection}>
				{/* Buying */}
				<div className={styles.buy}>
					<h3>Buy a Home</h3>

					<p>
						Find your place through immersive photography with a bunch of
						listings, maybe even some you will not find anywhere else.
					</p>

					<ArrowButton text={"Search Houses"} path="buy" />
				</div>

				{/* Rent */}
				<div className={styles.rent}>
					<h3>Rent a home</h3>
					<p>
						We're creating a seamless online experiences - from shopping on the
						largest rental network, to applying, to paying rent.
					</p>
					<ArrowButton text={"See Your Options"} path="rent" />
				</div>

				{/* Sell */}
				<div className={styles.sell}>
					<h3>Sell a home</h3>
					<p>
						Wether you get a cash offer throught Real Offers or choose to sell
						traditionally, we can help you navigate a successful sale.
					</p>
					<ArrowButton text={"Use Filters"} path="search" />
				</div>
			</div>
		</section>
	);
};

export default Section2;
