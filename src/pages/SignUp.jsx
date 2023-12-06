import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append('username', formData.username);
    formDataWithImage.append('password', formData.password);
    formDataWithImage.append('profileImage', profileImage);

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Redirigez l'utilisateur vers la page de connexion ou effectuez d'autres actions nécessaires
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>Profile Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">S&apos;inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
