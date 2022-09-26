import SingleEmail from "./SingleEmail"

function Email(props) {
    return <main className="emails">
    <ul>
      {props.filteredEmails.map((email, index) => (
        <SingleEmail key = {index}
        toggleRead = {props.toggleRead}
        toggleStar = {props.toggleStar}
        email = {email}/>
      ))}
    </ul>
  </main>
}

export default Email