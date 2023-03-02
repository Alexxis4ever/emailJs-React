import React, { useRef } from "react";
import { HeaderContact } from "../HeaderContact/HeaderContact";
import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import { LabelUI } from "../../UI/LabelUI/LabelUI";
import { InputUI } from "../../UI/InputUI/InputUI";
import { TextAreaUI } from "../../UI/TextAreaUI/TextAreaUI";

import "../../../index.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactUs = () => {
  const form = useRef();

  const handdleSendEmail = (event) => {
    
    const serviceId = "service_i19tpz6";
    const emailTemplate = "template_k68vevf";
    const APIKEY = "9ByN8GiJOI-NutkJf";

    event.preventDefault();
    emailjs.sendForm(serviceId, emailTemplate, form.current, APIKEY)

    .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Enviado con exito",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Ha ocurrido un error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  };


  return (
    <form ref={form} action="" onSubmit={handdleSendEmail}>
      <HeaderContact />
      <fieldset className="fieldName">
        <LabelUI styleLbl="symbol" textLbl="Name" />
        <InputUI nameText='name' suggestion="Jackson Londoño" nameId="name" />
      </fieldset>
      <fieldset className="fieldEmail">
        <LabelUI styleLbl="symbol" textLbl="Email" />
        <InputUI nameText='email' suggestion="ej: email@dom.co" nameId="email" />
      </fieldset>
      <fieldset className="fieldMessage">
        <LabelUI styleLbl="symbol" textLbl="Message" />
        <TextAreaUI style="textAreaMessage" />
      </fieldset>
      <ButtonUI styleBtn="btnSend" text="Send" />
    </form>
  );
};
