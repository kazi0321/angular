import { CustomTextareaModule } from './custom-textarea.module';

describe('CustomTextareaModule', () => {
  let customTextareaModule: CustomTextareaModule;

  beforeEach(() => {
    customTextareaModule = new CustomTextareaModule();
  });

  it('should create an instance', () => {
    expect(customTextareaModule).toBeTruthy();
  });
});
