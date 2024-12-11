import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

@Configuration
public class DatabaseConfig {

    @Value("${DATABASE_URL}")
    private String databaseUrl;

    @PostConstruct
    public void configureDatabaseUrl() {
        if (databaseUrl != null && databaseUrl.startsWith("postgres://")) {
            String jdbcUrl = databaseUrl.replace("postgres://", "jdbc:postgresql://");
            System.setProperty("spring.datasource.url", jdbcUrl);
        }
    }
}