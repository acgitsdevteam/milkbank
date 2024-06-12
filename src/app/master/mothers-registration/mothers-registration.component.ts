import { Component } from '@angular/core';


interface Step {
  id: number;
  title: string;
  iconClass: string;
}

@Component({
  selector: 'app-mothers-registration',
  templateUrl: './mothers-registration.component.html',
  styleUrls: ['./mothers-registration.component.css']
})

export class MothersRegistrationComponent {
  currentStep: number = 1;
  steps: Step[] = [
    { id: 1, title: 'Personal Details', iconClass: 'fa fa-map-marker' },
    { id: 2, title: 'Hospital Details', iconClass: 'fa fa-folder-open' },
    { id: 3, title: 'Send', iconClass: 'fa fa-paper-plane' }
  ];

  onStepChange(step: number) {
    this.currentStep = step;
  }

  indicatorClass(step: Step) {
    return {
      active: step.id === this.currentStep,
      complete: this.currentStep > step.id
    };
  }

  goToStep(stepId: number) {
    this.currentStep = stepId;
  }

  isActive() {
    return this.steps.some(step => step.id === this.currentStep);
  }

  isFirstStep() {
    return this.currentStep === 1;
  }

  isLastStep() {
    return this.currentStep === this.steps.length;
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  lastStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
