export default function Main(props){

    const { data } = props

    return(
        <div className="imageContainer">
           <img className="bgImg" src={data?.hdurl} alt={data.title || 'bg-image'} /> 
        </div>
    )
}