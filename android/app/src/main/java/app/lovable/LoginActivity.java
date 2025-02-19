
package app.lovable;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class LoginActivity extends AppCompatActivity {
    private EditText employIdInput;
    private EditText passwordInput;
    private Button loginButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        employIdInput = findViewById(R.id.employIdInput);
        passwordInput = findViewById(R.id.passwordInput);
        loginButton = findViewById(R.id.loginButton);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String employId = employIdInput.getText().toString();
                String password = passwordInput.getText().toString();

                if (employId.isEmpty()) {
                    employIdInput.setError("Employee ID is required");
                    return;
                }

                if (password.length() < 6) {
                    passwordInput.setError("Password must be at least 6 characters");
                    return;
                }

                // Handle login logic here
                Toast.makeText(LoginActivity.this, "Logging in...", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
