import styles from "./Card.module.scss";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";

import building3 from "../../assets/building3.jpeg";

const Card = ({ info, showInfo, secondClass }) => {
	// Price Conversion
	const priceConversion = (price) => {
		if (price >= 1000 && price < 9999999) return `${price / 1000}k`;
		if (price >= 1000000) return `${price / 10000000}m`;
		return price;
	};

	// Rent Conversion
	const rentConversion = (rent) => {
		if (rent >= 1000) return `${rent / 1000}k`;
		return rent;
	};

	return (
		<div className={`${styles.card_container} ${secondClass}`}>
			{/* Image */}
			<div className={styles.image_container}>
				<div className={styles.image_buy_btn}>
					<Link to="/">{info.category}</Link>
				</div>

				<img src={info.imageSource} alt="building" />
			</div>

			{/* City */}
			<h3>{info.city}</h3>
			<h4>
				<p className={styles.neighborhood}>{info.neighborhood}</p>

				<p className={styles.street}>{info.street}</p>
			</h4>

			{/* Rooms, etc. */}
			<div className={styles.info}>
				{/* First Row */}
				<div className={styles.row1}>
					{/* Rooms */}
					<div className={styles.rooms}>
						<BsFillDoorOpenFill />
						<span>{`${info.rooms} Rooms`}</span>
					</div>

					{/* Bedrooms */}
					<div className={styles.bedrooms}>
						<IoIosBed />
						<span>{`${info.bedrooms} Bedrooms`}</span>
					</div>
				</div>
			</div>

			{/* Second Row */}
			<div className={styles.row2}>
				{/* Bathrooms */}
				<div className={styles.bathrooms}>
					<FaBath />
					<span>{`${info.bathrooms}`}</span>
				</div>
				{/* Short Address (Airport Code) */}
				<div className={styles.shortAddress}>
					<IoLocationSharp />
					<span>{`${info.shortAddress}`}</span>
				</div>
			</div>

			{/* Prices */}
			<div className={styles.card_buy}>
				<div className={styles.prices}>
					<h2 style={showInfo.price ? {} : { display: "none" }}>
						{`${priceConversion(info.price)}`}
					</h2>

					<h2 style={showInfo.rent ? {} : { display: "none" }}>
						{`${rentConversion(info.rent)}`}
					</h2>
				</div>

				{/* See More Button */}
				<div className={styles.card_btn}>
					<Link to={`/property/${info.id}`}>See More</Link>
				</div>
			</div>
		</div>
	);
};

Card.defaultProps = {
	info: {
		id: undefined,
		imageSource: building3,
		category: "Buy",
		city: "City",
		neighborhood: "Neighborhood",
		street: "Street",
		rooms: 9,
		bedrooms: 7,
		bathrooms: 2,
		shortAddress: "DA",
		price: 80000,
		rent: 0,
	},
	showInfo: {
		price: true,
		rent: false,
	},
	secondClass: "undefined",
};

export default Card;
