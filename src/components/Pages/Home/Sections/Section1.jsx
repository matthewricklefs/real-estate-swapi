import styles from "./Section1.module.scss";
import Navbar from "../../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import building1 from "../../../../assets/building1.jpeg";

const Section1 = () => {
  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState("");

  return (
    <section className={styles.section_1}>
      {/* Navigation */}
      <div className={styles.Navbar}>
        <Navbar BurgerColour={"whitesmoke"} />
      </div>

      {/* BG Images */}
      <div className={styles.img}></div>

      {/* Content */}
      <div className={styles.section_1_content}>
        {/* Call to Action */}
        <div className={styles.slogan}>
          <h1>Ease into your new Dream House.</h1>
          <p>
            Search and find your dream home at an affordable price that is
            paired with the best quality. It's a 'Real' good time.
          </p>

          {/* Search Query */}
          <div className={styles.search_container}>
            {/* Location */}
            <div className={styles.location_container}>
              <span>Location</span>

              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>

            {/* Pricing Section */}
            <div className={styles.price_container}>
              <span>Price Range</span>

              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              >
                <option value="< 100k">{`< 100k`}</option>
                <option value="100k-200k">100k - 200k</option>
                <option value="200k-500k">200k - 500k</option>
                <option value=">500k">{`> 500k`}</option>
              </select>
            </div>

            <button className={styles.btn_search}>
              <Link to="search">Search</Link>
            </button>
          </div>
        </div>

        {/* Building Image */}
        <div className={styles.slogan_image}>
          <img src={building1} alt="building" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
