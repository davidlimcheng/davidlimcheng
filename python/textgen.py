from numpy import zeros, argmax


class Textgen():

    def __init__(self):
        self.model = 'placeholder'
        self.num_chars_to_predict = 100
        self.step_size = 5
        self.window_size = 100

    def print_message(self):
        print(self.message)

    def cleaned_text(self, text):
        punctuation = ['!', ',', '.', ':', ';', '?']
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                    'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u',
                    'v', 'w', 'x', 'y', 'z']
        text = text.lower()
        for c in text:
            if c not in alphabet and c not in punctuation:
                text = text.replace(c, ' ')
        text = text.replace('  ', ' ')
        return text

    def chars_to_indices(self, unique_chars):
        return dict((c, i) for i, c in enumerate(unique_chars))

    def indices_to_chars(self, unique_chars):
        return dict((i, c) for i, c in enumerate(unique_chars))

    def unique_chars(self, text):
        return sorted(list(set(text)))

    def predict_next_chars(self, input_text):
        cleaned_text = self.cleaned_text(input_text)
        unique_chars = self.unique_chars(cleaned_text)
        chars_to_indices_map = self.chars_to_indices(unique_chars)
        indices_to_chars_map = self.indices_to_chars(unique_chars)

        predicted_chars = ''
        for i in range(self.num_chars_to_predict):
            # convert input characters to numerical
            x_test = zeros((1, self.window_size, len(unique_chars)))
            for t, char in enumerate(cleaned_text):
                x_test[0, t, chars_to_indices_map[char]] = 1

            # make the prediction
            test_predict = self.model.predict(x_test, verbose=0)[0]

            # translate the numerical output back to characters
            predicted_index = argmax(test_predict)
            predicted_char = indices_to_chars_map[predicted_index]

            # update predicted chars and input for next iteration
            predicted_chars += predicted_char
            cleaned_text += predicted_char
            cleaned_text = cleaned_text[1:]

        return predicted_chars

