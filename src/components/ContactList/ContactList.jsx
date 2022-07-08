export const ContactList = ({ data }) => (
  <div>
    <ul>
      {data.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  </div>
);
