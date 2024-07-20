import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import whiteTheme from "../../styles/Theme";

const BookForm = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({
    bookName: false,
    author: false,
    releaseYear: false,
    gender: false,
  });

  const [helperTexts, setHelperTexts] = useState({
    bookName: "",
    author: "",
    releaseYear: "",
    gender: "",
  });

  const validate = () => {
    let hasError = false;
    const newErrors = { bookName: false, author: false, releaseYear: false, gender: false };
    const newHelperTexts = { bookName: "", author: "", releaseYear: "", gender: "" };

    if (bookName.trim() === "") {
      newErrors.bookName = true;
      newHelperTexts.bookName = "Insert Book Name!";
      hasError = true;
    }

    if (author.trim() === "") {
      newErrors.author = true;
      newHelperTexts.author = "Insert Author Name!";
      hasError = true;
    }

    if (releaseYear.trim() === "") {
      newErrors.releaseYear = true;
      newHelperTexts.releaseYear = "Insert Release date!";
      hasError = true;
    }

    if (gender.trim() === "") {
      newErrors.gender = true;
      newHelperTexts.gender = "Insert Book Gender!";
      hasError = true;
    }

    setErrors(newErrors);
    setHelperTexts(newHelperTexts);

    if (!hasError) {
      submit();
    }
  };

  const submit = () => {
    const newBook = {
      name: bookName,
      author: author,
      releaseYear: releaseYear,
      gender: gender,
    };

    axios
      .post("http://localhost:3000/register-book", newBook)
      .then((response) => {
        console.log("Livro Cadastrado com Sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao conectar com o banco de dados:", error);
      });
  };

  return (
    <ThemeProvider theme={whiteTheme}>
      <TextField
        helperText={helperTexts.bookName}
        error={errors.bookName}
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        id="outlined-multiline-flexible"
        label="Nome do Livro"
      />
      <TextField
        helperText={helperTexts.author}
        error={errors.author}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        id="outlined-multiline-flexible"
        label="Autor"
      />
      <TextField
        helperText={helperTexts.releaseYear}
        error={errors.releaseYear}
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        id="outlined-multiline-flexible"
        label="Ano de Lançamento"
      />
      <TextField
        helperText={helperTexts.gender}
        error={errors.gender}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        id="outlined-multiline-flexible"
        label="Gênero"
      />
      <button onClick={validate}>Enviar</button>
    </ThemeProvider>
  );
};

export default BookForm;
