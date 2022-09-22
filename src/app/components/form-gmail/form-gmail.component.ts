import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <section class="bg-light py-5">
      <div class="container px-5 my-5 px-5">
        <div class="text-center mb-5">
          <h2 class="fw-bolder">Ponerse en contacto</h2>
          <p class="lead mb-0">Nos encantaría saber de ti</p>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-9">
            <!-- to get an API token!-->
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label for="name">Nombre Completo</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  El nombre es requerido.
                </div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                />
                <label for="email">Correo</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  El correo es requerido.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Correo invalido.
                </div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label for="phone">Teléfono</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  El número de teléfono es requerido.
                </div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label for="message">Su mensaje</label>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  El mensaje es requerido.
                </div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Enviado!</div>

                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error al enviar!
                </div>
              </div>
              <!-- Submit Button-->
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-lg disabled"
                  id="submitButton"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() name = '';

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-form-gmail',
  templateUrl: './form-gmail.component.html',
  styleUrls: ['./form-gmail.component.scss'],
})
export class FormGmailComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
