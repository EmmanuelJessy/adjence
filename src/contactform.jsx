import React, { useState } from "react";
import styled from "styled-components";
import NotificationBanner from "./Banner";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifiez si des champs sont vides
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setBannerMessage(
        "Veuillez remplir correctement tous les champs avant de soumettre."
      );
      setShowBanner(true); // Affichez la bannière d'erreur
      return;
    }

    // Envoyer un email
    emailjs
      .send(
        "service_1rqaj0r",
        "template_1c4cf99",
        formData,
        "mGCGRvDe8nx8q5KZK"
      )
      .then((response) => {
        // Réinitialiser le formulaire après l'envoi
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        setBannerMessage("Votre message a été envoyé avec succès.");
        
        setShowBanner(true);
        setTimeout(() => {
            navigate('/le-mur');
          }, 3000);
      })
      .catch((error) => {
        setBannerMessage(
          "Une erreur est survenue lors de l'envoi de votre message."
        );
        setShowBanner(true);
      });

    setShowBanner(false); // Cacher la bannière d'erreur si le formulaire est valide
   
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <NotificationBanner
        message={bannerMessage} // Dynamic message for the banner
        show={showBanner}
        onClose={handleCloseBanner}
      />

      <Title>Contactez-nous</Title>

      <InputWrapper>
        <Label>
          Prénom <span>*</span>
        </Label>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Entrez votre prénom"
        />
      </InputWrapper>

      <InputWrapper>
        <Label>
          Nom <span>*</span>
        </Label>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Entrez votre nom"
        />
      </InputWrapper>

      <InputWrapper>
        <Label>
          Téléphone <span>*</span>
        </Label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Entrez votre numéro de téléphone"
        />
      </InputWrapper>

      <InputWrapper>
        <Label>
          Email <span>*</span>
        </Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Entrez votre e-mail"
        />
      </InputWrapper>

      <InputWrapper>
        <Label>
          Message <span>*</span>
        </Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          placeholder="Parlez-nous de votre projet ou de vos inquiétudes ..."
        />
      </InputWrapper>

      <PrivacyText>
        Nous respectons votre vie privée. Vos informations ne seront pas
        partagées.
      </PrivacyText>

      
      <div className="talk" onClick={handleSubmit}>
                <div className="let">
                  <h5>J'ENVOIE 😊 !</h5>
                </div>
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
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #4637d1;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  font-family: "Poppins";
`;

const Label = styled.label`
  font-weight: normal;
  margin-bottom: 5px;
  display: block;
  color: black;
  font-family: "Poppins";
  span {
    color: #4637d1;
  }
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
    border-color: #007bff;
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
font-family: "Poppins";
  &:focus {
    border-color: #007bff;
    outline: none;
  }
  &::placeholder {
    font-family: "Poppins";
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
