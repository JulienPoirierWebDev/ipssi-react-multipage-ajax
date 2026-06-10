import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

const CardBook = ({ book }) => {
  return (
    <>
      <Card size="sm" className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle>{book.title}</CardTitle>
          <CardDescription>
            Auteur : {book.author_name} - {book.first_publish_year}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            {book.subject?.slice(0, 3).map((oneSubject) => {
              return <li key={oneSubject}>{oneSubject}</li>;
            })}
          </ul>
        </CardContent>
        <CardFooter>
          <Link to={`/auteur/${book.author_key[0]}`} state={{ key: book?.author_key[0] }}>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                console.log("hey");
              }}
            >
              En savoir plus sur l'auteur
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardBook;
