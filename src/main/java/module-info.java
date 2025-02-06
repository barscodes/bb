module com.example.somethingfromsomeone {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.somethingfromsomeone to javafx.fxml;
    exports com.example.somethingfromsomeone;
}