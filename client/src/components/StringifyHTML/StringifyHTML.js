const StringifyHTML = ({Text}) => {
    return ( <div dangerouslySetInnerHTML={{__html: Text}} /> );
} 
export default StringifyHTML;