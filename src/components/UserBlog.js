const User = ({ query }) => {
    switch (query) {
      case (query >= 0 && 10 >= query ):
        return "Bret";
      case (query >= 0 && 20 >= query ):
        return "Antonette";
      case (query >= 0 && 30 >= query ):
        return "Samantha";
      case (query >= 0 && 40 >= query ):
        return "Karianne";
      case (query >= 0 && 50 >= query ):
        return "Kamren";
      case (query >= 0 && 60 >= query ):
        return "Leopoldo_Corkery";
      case (query >= 0 && 70 >= query ):
        return "Elwyn.Skiles";
      case (query >= 0 && 80 >= query ):
        return "Maxime_Nienow";
      case (query >= 0 && 90 >= query ):
        return "Delphine";
      case (query >= 0 && 100 >= query ):
        return "Moriah.Stanton";
      default:
        return "User";
    }
  };
  
  export default User;
  