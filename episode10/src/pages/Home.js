import { useQuery } from '@tanstack/react-query';
import Axios from "axios";


export const Home = () => {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        }
    });

    if(isError)
        return <h1> Sorry !!! An unexpected error occured</h1>

    if (isLoading)
        return <h1> Loading...</h1>
    return (
    <h1> THIS IS THE HOME PAGE <p> {data?.fact} </p> 
    <button onClick={refetch}> Update the data </button>
    </h1>
    );
}