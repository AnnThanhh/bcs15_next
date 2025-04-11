import Image from "next/image";
import styles from "./page.module.css";
import { getAllProduct } from "./actions/service/productApi";
import Link from "next/link";

export const metadata = {
  //thông tin mô tả nội dung của trang web, giúp cho trình duyệt web, các search engine, mxh,... hiểu được nội dung của trang web 
  title: "Shoe Shop | Home",
  description:
    "Khám phá các mẫu giày mới nhất tại Shoe Shop. Giá tốt, chất lượng cao!",
  keywords: ["giày", "giày sneaker", "shoe shop", "sneakers", "giày đẹp"],
  openGraph: {
    title: "Shoe Shop",
    description: "Khám phá các mẫu giày hot nhất tại Shoe Shop!",
    url: "https://bcs15-next.vercel.app", // Thay bằng domain thực tế
    siteName: "Shoe Shop",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png", // Ảnh đại diện khi share
        width: 800,
        height: 600,
        alt: "Ảnh giày nổi bật",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

//server component
const Home = async () => {
  const data = await getAllProduct();
  console.log(data);
  return (
    <div className={styles.page}>
      {/* <h3>Hello Cybersoft</h3>
      <Image
        src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
        width={300}
        height={300}
        quality={100}
        crossOrigin="anonymous"
        alt="hình giày 1"
        style={{ width: "auto" }}
      />
      <button className="btn btn-success">Demo</button> */}
      <h3>Shoe shop</h3>
      <div className="row">
        {data?.map((prod) => {
          return (
            // <h3 key={prod.id}>
            //   {prod.name}
            //   <Link href={`/detail/${prod.id}`} className="btn btn-success">
            //     Xem chi tiết
            //   </Link>
            // </h3>
            <div className="col-4 mt-2" key={prod.id}>
              <div className="card">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  crossOrigin="anonymous"
                  width={500}
                  height={500}
                  className="w-100"
                />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p> {prod.price}</p>
                  <Link href={`/detail/${prod.id}`} className="btn btn-success">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

//đối với nextjs đây sẽ là cách làm sai vì script gọi api lấy data sẽ được thực hiện tại client
// export default function Home() {
//   const [arrProduct, setArrProduct] = useState([]);
//   const getAllProduct = async () => {
//     const res = await fetch("/api/product");
//     const data = await res.json();
//     console.log(data.content);
//     setArrProduct(data.content);
//   };
//   useEffect(() => {
//     getAllProduct();
//   }, []);
//   return (
//     <div className={styles.page}>
//       {/* <h3>Hello Cybersoft</h3>
//       <Image
//         src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
//         width={300}
//         height={300}
//         quality={100}
//         crossOrigin="anonymous"
//         alt="hình giày 1"
//         style={{ width: "auto" }}
//       />
//       <button className="btn btn-success">Demo</button> */}
//       <h3>Shoe shop</h3>
//       {arrProduct.map((prod) => {
//         return <h3 key={prod.id}>{prod.name}</h3>;
//       })}
//     </div>
//   );
// }
