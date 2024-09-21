import React, { useState } from 'react';
import styled from 'styled-components';
import NotificationBanner from './Banner'; // Importez le composant NotificationBanner

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email:'',
    message: ''
  });

  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
      setBannerMessage('Veuillez remplir correctement tous les champs avant de soumettre.');
      setShowBanner(true);  // Show error banner
      
      
      return;
    }

    setShowBanner(false); // Hide error banner if form is valid
    
    // Handle form submission logic here
    console.log("Formulaire soumis avec succès :", formData);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <NotificationBanner
        message={bannerMessage}  // Dynamic message for the banner
        show={showBanner}
        onClose={handleCloseBanner}
      />
      
      <Title>Contactez-nous</Title>

      <InputWrapper>
        <Label>Prénom(s)</Label>
        <Input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Nom</Label>
        <Input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Téléphone</Label>
        <Input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Email</Label>
        <Input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Message</Label>
        <TextArea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          rows="5" 
          required 
        />
      </InputWrapper>

      <PrivacyText>
        Nous respectons votre vie privée. Vos informations ne seront pas partagées.
      </PrivacyText>

      <div className="btnsubmit" onClick={handleSubmit}>
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </div>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #4637d1;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: normal;
  margin-bottom: 5px;
  display: block;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const PrivacyText = styled.p`
  font-size: 14px;
  color: black;
  text-align: left;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #4637d1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 50%;
  margin-top: 1vw;
`;
