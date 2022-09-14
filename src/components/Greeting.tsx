interface GreetingProps {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
}

export const Greeting = ({
  name,
  messageCount = 0,
  isLoggedIn,
}: GreetingProps) => {
  return (
    <>
      {isLoggedIn ? (
        <h2>
          Hello Mr.{name}, you have {messageCount} Messages.
        </h2>
      ) : (
        <p>Hello Guest</p>
      )}
    </>
  );
};
