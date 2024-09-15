package com.example.application.views.main;

import com.example.application.views.MainLayout;
import com.example.application.views.main.sorts.*;
import com.example.application.views.parser.AST_Execution_Thread;
import com.example.application.views.parser.Algorithm_Node;
import com.example.application.views.parser.Memory;
import com.example.application.views.parser.Parser;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.combobox.MultiSelectComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.example.application.views.main.HelperFunctions.createBars;

@PageTitle("Sort-it-out!")
@Route(value = "main", layout = MainLayout.class)
@RouteAlias(value = "", layout = MainLayout.class)
public class MainView extends VerticalLayout {
    VerticalLayout mainVertical = new VerticalLayout();
    private final MultiSelectComboBox<String> algorithmSelector;
    TextField inputField = new TextField("Enter numbers!");
    TextArea inputCodeField;
    private final Grid<String> selectedGrid;
    HorizontalLayout horizontalGroup = new HorizontalLayout();
    VerticalLayout customGroup = new VerticalLayout();
    private final MemoryBuffer memoryBuffer = new MemoryBuffer();
    Upload upload = new Upload(memoryBuffer);
    InputStream fileData;
    String fileContent;
    private final Grid<Integer> resultGrid;
    private final Grid<SortTime> timingGrid;
    private VerticalLayout visualGroup = new VerticalLayout();

    // setting up all components
    public MainView() {
        algorithmSelector = new MultiSelectComboBox<>("Choose one or multiple sorting algorithms!");
        algorithmSelector.setItems("Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort", "Quick Sort");
        algorithmSelector.setWidth("40%");

        Button nextButton = new Button("Next!", e -> createList());
        nextButton.getStyle().set("margin-top", "40px");

        inputCodeField = new TextArea("Or create your own sorting algorithm!");
        inputCodeField.setWidth("60%");

        Button doneButton = new Button("Done!", e -> createAlgorithm());
        doneButton.getStyle().set("margin-top", "40px");

        HorizontalLayout algorithmGroup = new HorizontalLayout(algorithmSelector, nextButton, inputCodeField, doneButton);
        algorithmGroup.setWidth("100%");

        mainVertical.add(algorithmGroup);

        selectedGrid = new Grid<>(String.class);
        selectedGrid.setHeight("200px");
        selectedGrid.setWidth("40%");
        selectedGrid.removeAllColumns();
        selectedGrid.addColumn(n -> n).setHeader("Selected algorithms");

        customGroup.setWidth("40%");
        customGroup.getStyle().set("margin-left", "250px");

        horizontalGroup.add(selectedGrid, customGroup);
        horizontalGroup.setFlexGrow(0, selectedGrid);
        horizontalGroup.setFlexGrow(1, customGroup);
        horizontalGroup.setWidth("100%");

        mainVertical.add(horizontalGroup);

        RadioButtonGroup<String> dataOptions = new RadioButtonGroup<>();
        dataOptions.setLabel("Choose how would you like to enter data!");
        dataOptions.setItems("Enter numbers:", "Select data from your device (.txt, .csv) :");

        mainVertical.add(dataOptions);

        inputField.setVisible(false);
        upload.setVisible(false);

        Button uploadButton = new Button("Upload a file...");
        Span dropLabel = new Span("Drop a file here");
        upload.setUploadButton(uploadButton);
        upload.setDropLabel(dropLabel);

        mainVertical.add(inputField);
        mainVertical.add(upload);

        dataOptions.addValueChangeListener(event -> {
            String selectedOption = event.getValue();
            if (selectedOption != null) {
                switch (selectedOption) {
                    case "Enter numbers:":
                        upload.setVisible(false);
                        inputField.setVisible(true);
                        break;
                    case "Select data from your device (.txt, .csv) :":
                        inputField.setVisible(false);
                        upload.setVisible(true);
                        upload.setAcceptedFileTypes(".txt", ".csv");

                        upload.getElement()
                                .addEventListener("max-files-reached-changed", e -> {
                                    boolean maxFilesReached = e.getEventData()
                                            .getBoolean("event.detail.value");
                                    uploadButton.setEnabled(!maxFilesReached);
                                }).addEventData("event.detail.value");

                        upload.addFileRejectedListener(e -> {
                            String errorMessage = e.getErrorMessage();
                            Notification notification = Notification.show(errorMessage, 5000,
                                    Notification.Position.MIDDLE);
                            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                        });

                        upload.addSucceededListener(e -> {
                            try {
                                fileData = memoryBuffer.getInputStream();
                                fileContent = convertInputStreamToString(fileData);
                            } catch (IOException ex) {
                                Notification.show("Error reading file: " + ex.getMessage());
                            }
                        });
                        break;
                    default:
                        Notification.show("Unknown option selected");
                }
            }
        });

        Checkbox animation = new Checkbox();
        animation.setLabel("I want visuals for sorting my data!");
        mainVertical.add(animation);

        Button sortButton = new Button("Sort it out!", e -> {
            try {
                sort(animation.getValue());
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        mainVertical.add(sortButton);

        resultGrid = new Grid<>(Integer.class);
        resultGrid.addColumn(n -> n).setHeader("Sorted Output");
        resultGrid.setVisible(false);

        timingGrid = new Grid<>(SortTime.class);
        timingGrid.setColumns("sortAlgorithm", "executionTime");
        timingGrid.getColumnByKey("sortAlgorithm").setHeader("Algorithm");
        timingGrid.getColumnByKey("executionTime").setHeader("Execution Time (ms)");
        timingGrid.setVisible(false);

        HorizontalLayout resultGroup = new HorizontalLayout(resultGrid, timingGrid);
        resultGroup.setWidth("100%");

        mainVertical.add(resultGroup);

        visualGroup.setVisible(false);

        mainVertical.add(visualGroup);

        add(mainVertical);
    }

    private void createAlgorithm() {
        String input = getInput();
        Integer[] numbers = parseInput(input);

        customGroup.removeAll();

        CustomSort customSort = new CustomSort(numbers);

        customGroup.add(customSort);

        Parser parser = new Parser(inputCodeField.getValue());
        Algorithm_Node AST = parser.parse();

        Memory memory = new Memory();
        ArrayList<Integer> unsorted = new ArrayList<>(Arrays.asList(numbers));
        memory.add("data", unsorted);
        AST_Execution_Thread execution_thread = new AST_Execution_Thread(AST, memory);
        execution_thread.start();

        UI currentUI = UI.getCurrent();
        new Thread(() -> {
            try {
                while (!sorted(memory.get_data())) {

                    Integer[] array = memory.get_data().toArray(new Integer[0]);
                    customSort.start(array, currentUI);
                    Thread.sleep(30);
                }
                Integer[] array = memory.get_data().toArray(new Integer[0]);
                customSort.start(array, currentUI);
                Thread.sleep(30);

            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
    }

    private boolean sorted(ArrayList<Integer> array)
    {
        for (int i = 0; i < array.size() - 1; i++) {
            if (array.get(i) > array.get(i + 1)) {
                System.out.println(array + " Unsorted!");
                return false;
            }
        }
        System.out.println("Sorted!");
        return true;
    }

    // creating a list of selected algorithms after clicking doneButton
    public void createList()
    {
        Set<String> selectedAlgorithms = algorithmSelector.getValue();
        if (selectedAlgorithms.isEmpty())
        {
            Notification.show("No algorithms selected.");
            return;
        }
        if(algorithmSelector.getValue().size() > 4)
        {
            Notification.show("Maximum of 4 algorithms can be selected.");
            return;
        }

        List<String> selectedAlgorithmsList = new ArrayList<>(selectedAlgorithms);
        selectedGrid.setItems(selectedAlgorithmsList);
    }

    // handling different options for providing data
    private String getInput()
    {
        String input = null;
        if (inputField.isVisible() && !inputField.getValue().isEmpty())
            input = inputField.getValue();

        else if (upload.isVisible() && fileContent != null)
            input = fileContent;

        return input;
    }
    // used for reading uploaded file
    public static String convertInputStreamToString(InputStream inputStream) throws IOException
    {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream)))
        {
            return reader.lines().collect(Collectors.joining("\n"));
        }
    }

    public static double convertNsToMs(long nanoseconds)
    {
            return nanoseconds / 1_000_000.0;
    }

    // handling sorting after clicking sortButton
    private void sort(boolean animation) throws IOException
    {
        Set<String> selectedAlgorithms = algorithmSelector.getValue();
        boolean isResultShown = false;
        String input = getInput();

        if (input == null)
        {
            Notification.show("No data provided.");
            return;
        }
        if (selectedAlgorithms.isEmpty())
        {
            Notification.show("No algorithm selected.");
            return;
        }

        List<SortTime> timings = new ArrayList<>();
        Integer[] numbers = parseInput(input);

        if(numbers.length > 70)
        {
            Notification.show("Visualisation is not available for arrays bigger than 70 elements.");
        }

        SortAlgorithm<Integer> sorter;

        for(String algorithm : selectedAlgorithms)
        {
            Integer[] numbersCopy = numbers.clone();
            sorter = getSorter(algorithm, null, false);

            if (sorter != null) {
                long startTime = System.nanoTime();
                sorter.sort(numbersCopy, null);
                long endTime = System.nanoTime();

                double durationMs = convertNsToMs(endTime - startTime);
                timings.add(new SortTime(algorithm, durationMs));

                System.out.println(algorithm);
                System.out.println(durationMs);

                if (!isResultShown)
                {
                    resultGrid.setItems(toList(numbersCopy));
                    resultGrid.setVisible(true);
                    isResultShown = true;
                }
            }
        }
        timingGrid.setItems(timings);
        timingGrid.setVisible(true);

        if(animation && numbers.length <= 70)
        {
            animate(selectedAlgorithms, numbers);
        }
    }

    private void animate(Set<String> selectedAlgorithms, Integer[] numbers)
    {
        visualGroup.removeAll();
        visualGroup.add(new AnimatedSort<Integer>(selectedAlgorithms, numbers));
        visualGroup.setVisible(true);
    }

    // parsing input, space or comma separated allowed
    private Integer[] parseInput(String input)
    {
        return Arrays.stream(input.split("[,\\s]+"))
                .map(Integer::parseInt)
                .toArray(Integer[]::new);
    }

    // create a new instance of selected algorithm
    private SortAlgorithm<Integer> getSorter(String algorithm, Div container, boolean animation)
    {
        return switch (algorithm) {
            case "Bubble Sort" -> new BubbleSort<>(animation, container);
            case "Quick Sort" -> new QuickSort<>(animation, container);
            case "Merge Sort" -> new MergeSort<>(animation, container);
            case "Selection Sort" -> new SelectionSort<>(animation, container);
            case "Insertion Sort" -> new InsertionSort<>(animation, container);
            default -> null;
        };
    }

    private List<Integer> toList(Integer[] array)
    {
        return Arrays.stream(array).collect(Collectors.toList());
    }
}
