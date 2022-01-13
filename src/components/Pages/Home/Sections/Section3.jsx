import styles from "./Section3.module.scss";
import Carousel from "../../../Carousel/Carousel";
import Card from "../../../Card/Card";
import { ArrowButton } from "../../../Buttons/Buttons";
import { SwiperSlide } from "swiper/react";
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
                      id: house.id,
                      category: "Buy",
                      imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                      city: `${house.attributes.location.data.attributes.City}`,
                      neighborhood: `${house.attributes.Neighborhood}`,
                      street: `${house.attributes.Street}`,
                      rooms: `${house.attributes.Rooms}`,
                      bedrooms: `${house.attributes.Bedrooms}`,
                      bathrooms: `${house.attributes.Bathrooms}`,
                      shortAddress: `${house.attributes.Short_Address}`,
                      price: `${house.attributes.Price}`,
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
