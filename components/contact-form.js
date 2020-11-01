import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NetlifyForm, Input, TextArea } from './form-elements';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <article className="relative w-full px-4 py-4 mx-auto mt-6 space-y-8 bg-white rounded-md shadow lg:mb-12 sm:px-6 lg:px-8">
      <NetlifyForm
        handleSubmit={handleSubmit}
        register={register}
        setIsSubmitting={setIsSubmitting}
        action="/success/"
        name="contact_form"
        className="w-full mx-auto space-y-6"
      >
        <Input
          name="full_name"
          label="Full name"
          register={register}
          errors={errors}
        />
        <Input
          name="phone_number"
          label="Phone number"
          type="tel"
          register={register}
          errors={errors}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextArea
          name="message"
          label="Message"
          register={register}
          errors={errors}
        />
        <div className="text-left font-architects">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-2 mt-4 tracking-wider text-white uppercase transition ease-in-out bg-green-500 border border-green-500 transition-duration-150 hover:text-green-500 hover:bg-white focus:text-green-500 focus:bg-white ${
              isSubmitting ? 'opacity-50 cursor-wait' : ''
            } `}
          >
            Submit
          </button>
        </div>
      </NetlifyForm>
    </article>
  );
}

export { ContactForm };
