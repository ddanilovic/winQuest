const User = ({ id }) => {
  //set user placeholder
  switch (id) {
    case 1:
      return "Bret";
    case 2:
      return "Antonette";
    case 3:
      return "Samantha";
    case 4:
      return "Karianne";
    case 5:
      return "Kamren";
    case 6:
      return "Leopoldo_Corkery";
    case 7:
      return "Elwyn.Skiles";
    case 8:
      return "Maxime_Nienow";
    case 9:
      return "Delphine";
    case 10:
      return "Moriah.Stanton";
    default:
      return "User";
  }
};

export default User;
