package examples;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class ExamplesTest {

    // https://karatelabs.github.io/karate/karate-core/#driver-types
    // sudo safaridriver --enable
    // mvn test "-Dkarate.options=--tags @debug"

    @Test
    void testParallel() {
        Results results = Runner.path("classpath:examples")
                //.outputCucumberJson(true)
                .parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
