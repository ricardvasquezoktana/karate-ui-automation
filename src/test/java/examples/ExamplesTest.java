package examples;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class ExamplesTest {

    // Java and Maven
    // https://github.com/karatelabs/karate/wiki/Get-Started:-Maven-and-Gradle
    // Install dependencies
    // https://karatelabs.github.io/karate/karate-core/#driver-types
    // sudo safaridriver --enable
    // mvn test "-Dkarate.options=--tags @debug"
    // setting of karate runner and karate

    @Test
    void testParallel() {
        Results results = Runner.path("classpath:examples")
                //.outputCucumberJson(true)
                .parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
