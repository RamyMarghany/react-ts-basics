interface personProps {
  name: {
    firstName: string;
    lastName: string;
  };
}

export const Person = ({ name: { firstName, lastName } }: personProps) => {
  return (
    <h4>
      Hello Mr {firstName}, {lastName}
    </h4>
  );
};
