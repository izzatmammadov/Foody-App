import Image from "next/image";

interface TableDatailDataProps {
  image: string;
  name: string;
  amount: number | number;
  price: string | number;
  count: number;
}

export const OrderTableDetailData: React.FC<TableDatailDataProps> = ({
  image,
  name,
  price,
  count,
  amount,
}) => {
  return (
    <tr>
      <td className="py-2 px-4 border-b border-whiteLight3">
        <Image width={30} height={0} src={image} alt={image} />
      </td>
      <td className="py-2 px-4 border-b border-whiteLight3">{name}</td>
      <td className="py-2 px-4 border-b border-whiteLight3">${price}</td>
      <td className="py-2 px-4 border-b border-whiteLight3">{count}</td>
      <td className="py-2 px-4 border-b border-whiteLight3">${amount}</td>
    </tr>
  );
};
