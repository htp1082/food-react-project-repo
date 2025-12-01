export default function Online({Name,isOnline}){
    return(
        <>

        {isOnline ?(
            <li id="onlines">{Name} is Online</li>
        ):(
            <li>{Name} is Ofline</li>
        )}
        </>
    )
}