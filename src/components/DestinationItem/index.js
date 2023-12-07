const DestinationItem = (props)=>{
    const {destinationDetails} = props
    const {imgUrl , name} = destinationDetails
    return <li>
        <img widht={50} height={50} src={imgUrl} alt={name} />
        <p>{name}</p>
    </li>
}

export default DestinationItem