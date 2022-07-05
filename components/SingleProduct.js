import styles from "./SingleProduct.module.css";
import Image from "next/image";

export default function SingleProduct({
  item_id,
  title,
  slug,
  images,
  description,
  price
}) {

  return (
    <div key={item_id} className={styles.product}>
      <Image
        src={'http://placekitten.com/640/640'}
        alt={`Image of ${title}`}
        height={640}
        width={640}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <div>
        <button
          className="snipcart-add-item"
          data-item-id={item_id}
          data-item-image='http://placekitten.com/640/640'
          data-item-name={title}
          data-item-url={`${window.location.hostname}/${slug}`}
          data-item-price={price}
          data-item-description={description}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}





















