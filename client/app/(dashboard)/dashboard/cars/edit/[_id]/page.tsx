import { getCarById } from "@/api/api";
import Update from "@/components/Update";
import { Metadata } from "next";

type Params = {
  _id: string;
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: `Edit Car ${params._id}`,
  };
}

export default async function EditCar(props: {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { params } = props;
  const car = await getCarById(params._id);
  return <Update car={car} />;
}
