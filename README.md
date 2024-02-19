#Header Component Test Cases

Test 1: Rendering Header Correctly

Description: This test verifies that the Header component renders correctly.

Input: None.
Expected Behavior: The Header component should be rendered without any errors.


#Item Component Test Cases

Test 1: Rendering Item Correctly

Description: This test verifies that the Item component renders the todo item correctly with the provided todo object.

Input: Todo object containing id, title, and completion status.
Expected Behavior: The Item component should render the todo item with the correct title and completion status.

Test 2: Toggling Completion Status When Checkbox Is Clicked

Description: This test ensures that the completion status of the todo item is toggled when the checkbox is clicked.

Input: Checkbox element representing the todo item's completion status.
Expected Behavior: The completion status of the todo item should be toggled, and the corresponding dispatch function should be called with the appropriate action type and payload.

Test 3: Removing Item When Remove Button Is Clicked

Description: This test verifies that the todo item is removed when the remove button is clicked.

Input: Remove button element.
Expected Behavior: The todo item should be removed from the list, and the corresponding dispatch function should be called with the appropriate action type and payload.


#Input Component Test Cases

Test 1: Rendering Input Element with Provided Props

Description: This test verifies that the Input component renders an input element with the provided props, including placeholder, label, and default value.

Input: Placeholder text, label text, and default value.
Expected Behavior: The input element should be rendered with the provided placeholder, label, and default value.

Test 2: Calling onSubmit Function with Sanitized Input Value on Enter Key Press

Description: This test ensures that the onSubmit function is called with the sanitized input value when the Enter key is pressed.

Input: Input value entered by the user.
Expected Behavior: The onSubmit function should be called with the sanitized input value when the Enter key is pressed.

Test 3: Not Calling onSubmit Function on Enter Key Press with Invalid Input Length

Description: This test verifies that the onSubmit function is not called when the Enter key is pressed and the input length is less than the minimum required length.

Input: Input value with length less than the minimum required length.
Expected Behavior: The onSubmit function should not be called when the Enter key is pressed and the input length is less than the minimum required length.

Test 4: Calling onBlur Callback When Input Loses Focus

Description: This test ensures that the onBlur callback is called when the input element loses focus.

Input: Input element losing focus.
Expected Behavior: The onBlur callback should be called when the input element loses focus.