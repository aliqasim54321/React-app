function Tr(props){
    let {item} = props;
    return(
      <tr>
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
      </tr>
    )
  
  }
  export  default Tr