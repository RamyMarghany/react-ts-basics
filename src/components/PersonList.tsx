interface personListProps {
  names: {
    firstName: string;
    lastName: string;
  }[];
}

export const PersonList = ({ names }: personListProps) => {
  return (
    <>
      {names.map((name) => (
        <p key={name.firstName}>
          {name.firstName}, {name.lastName}
        </p>
      ))}
    </>
  );
};
