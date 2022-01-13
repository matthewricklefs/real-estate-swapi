import styles from "./Section3.module.scss";
import { ArrowButton } from "../../../Buttons/Buttons";
import Carousel from "../../../Carousel/Carousel";

import { SwiperSlide } from "swiper/react";
import Card from "../../../Card/Card";
import { useQuery, gql } from "@apollo/client";

const CARD_DATA = gql`
  query {
    houses(
      filters: { categories: { Category: { contains: "Buy" } } }
      pagination: { limit: 6 }
    ) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }

          Street
          Rooms
          Bedrooms
          Bathrooms
          Price
          Rent
          Short_Address
          Neighborhood
        }
      }
    }
  }
`;

const Section3 = () => {
  const { loading, data, error } = useQuery(CARD_DATA);

  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Best Houses</h1>
        <ArrowButton text="See more.." />
      </div>

      {/* Cards & Carousel */}
      <div className={styles.cards}>
        <Carousel>
          {loading || error ? (
            <>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </>
          ) : (
            <>
              {data.houses.data.map((house, index) => (
                <SwiperSlide key={index}>
                  <Card
                    info={{
                      category: "Buy",
                      imageSource: `http://localhost:1337/${house.attributes.Preview_Image}`,
                    }}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default Section3;
