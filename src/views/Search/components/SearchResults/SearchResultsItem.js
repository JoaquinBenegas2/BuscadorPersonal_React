export default function SearchResultsItem({ name, email}) {
    return(
        <div style={{ 
            backgroundColor: "#E8E7E7", 
            marginTop: "15px",
            marginBottom: "15px",
            padding: "2px 15px",
            width: "100%"
        }}>
            <p style={{ paddingBottom: "15px", borderBottom:"2px solid #f2f2f2" }} >{name}</p>
            <p style={{ paddingBottom: "15px",borderBottom:"2px solid #f2f2f2" }} >{email}</p>
        </div>
    )
}