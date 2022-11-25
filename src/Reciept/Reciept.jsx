import { useContext } from "react";

const Reciept = () => {

    const {state} = useContext(DataContext);

    return ( 
        <div>
            {
                state.reciept.map((r,i)=>(
                    <div key={i}>
                        <p>{r.name}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Reciept;