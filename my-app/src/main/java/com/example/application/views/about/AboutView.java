package com.example.application.views.about;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin;

import java.util.ArrayList;

@PageTitle("About custom algorithms")
@Route(value = "/about", layout = MainLayout.class)
public class AboutView extends VerticalLayout {

    public AboutView() {
        H2 about = createTitle("How it works?");
        add(about);

        String text = """
                Your custom algorithm is interpreted by a special interpreter written for this simplified programming language.
                The algorithms that are already implemented are interpreted and executed by the Java runtime environment.
                Because of that, the time it took a custom algorithm and an implemented algorithm to sort an array,
                is not comparable.
                Instead of measuring time, you can visualize the algorithm and see how it works!
                After writing your algorithm, enter the data you want to sort and click Done!
                """;

        Span paragraph = createSpan(text);
        add(paragraph);

        H2 syntx = createTitle("Syntax");
        add(syntx);

        Span p1 = createSpan("Your custom algorithm must be written following these rules.");
        add(p1);

        H4 keywords = createSubtitle("Keywords");
        add(keywords);

        Span p2 = createSpan("There are a few keywords you can use:");
        add(p2);

        Grid<KeywordInfo> grid = new Grid<>();
        grid.addColumn(KeywordInfo::getKeyword).setHeader("Keyword");
        grid.addColumn(KeywordInfo::getAbout).setHeader("About");

        ArrayList<KeywordInfo> items = new ArrayList<>();

        items.add(new KeywordInfo("if", "if( condition ){}"));
        items.add(new KeywordInfo("else", "else{}"));
        items.add(new KeywordInfo("for", "for( initialization; condition; increment/decrement ){}"));
        items.add(new KeywordInfo("while", "while( condition ){}"));
        items.add(new KeywordInfo("break", "break - used inside a loop"));
        items.add(new KeywordInfo("swap", "swap( array, index1, index2 )"));
        items.add(new KeywordInfo("sleep", "sleep( number )"));
        items.add(new KeywordInfo("size", "size( array )"));
        items.add(new KeywordInfo("function", "function name( argument1, argument2 ){}"));
        items.add(new KeywordInfo("return", "return - used inside function"));

        grid.setItems(items);
        grid.setWidth("60%");
        grid.getStyle().set("margin-left", "20px");
        grid.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);

        add(grid);

        Span info = createSpan("*function can take as many arguments as you need");
        info.getStyle().set("color", "red");
        add(info);

        H4 operators = createSubtitle("Operators");
        add(operators);

        Span op1 = createSpan("Here you can find the list of all supported operators:");
        add(op1);

        Grid<KeywordInfo> gridOperators = new Grid<>();
        gridOperators.addColumn(KeywordInfo::getKeyword).setHeader("Group of operators");
        gridOperators.addColumn(KeywordInfo::getAbout).setHeader("Operators");

        ArrayList<KeywordInfo> itemsOperators = new ArrayList<>();

        itemsOperators.add(new KeywordInfo("Arithmetic operators", "+, -, *, /, +=, -=, ="));
        itemsOperators.add(new KeywordInfo("Comparison operators", "<, <=, >, >=, ==, !="));
        itemsOperators.add(new KeywordInfo("Logical operators", "&&, ||, !"));

        gridOperators.setItems(itemsOperators);
        gridOperators.setWidth("50%");
        gridOperators.setHeight("180px");
        gridOperators.getStyle().set("margin-left", "20px");
        gridOperators.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);

        add(gridOperators);

        H4 def = createSubtitle("Defining variables");
        add(def);

        Span p3 = createSpan("You define new variables without specifying their type:");
        Span p4 = createCode("i = 5");
        Span p5 = createCode("number = i + 2");
        Span p21 = createSpan("Only integer type of variables are supported!");

        HorizontalLayout variables = new HorizontalLayout(p4, p5);
        variables.setWidth("50%");
        p4.setWidth("25%");
        p5.setWidth("25%");

        add(p3, variables, p21);

        H4 arr = createSubtitle("Arrays");
        add(arr);

        Span p6 = createSpan("You can define a new array of size 1 with element '5', like this :");
        Span p7 = createCode("array = { 5 }");
        Span p8 = createSpan("You can define a new array of size 5 with an initialization list, like this :");
        Span p9 = createCode("array = { 5, 2, 1, 8, 9 }");
        Span p10 = createSpan("You can define a new array of size 5, but full of zeros like this :");
        Span p11 = createCode("array = [ 5 ]");
        Span p12 = createSpan("You can access and change the third element of the array like this :");
        Span p13 = createCode("array [ 3 ] = 11");
        Span p22 = createSpan("Or you can just read it like this :");
        Span p23 = createCode("if ( array [ 3 ] == 1 ){...}");
        Span p24 = createSpan("Function size returns the size of the array:");
        Span p25 = createCode("size( array )");

        add(p6, p7, p8, p9, p10, p11, p12, p13, p22, p23, p24, p25);

        H2 animation = createTitle("Enabling visualization");
        add(animation);

        Span p28 = createSpan("The array that the algorithm will sort needs to be uploaded. " +
                "It is by default named \"data\". When writing the algorithm use the \"data\" array as the input array that" +
                " will be sorted.");
        add(p28);

        Span p26 = createSpan("To enable visualization of your algorithm, you need to use function sleep. " +
                "Add a call to sleep function after places where your algorithm makes changes to the array it is sorting. " +
                "The sleep function takes number of miliseconds you want the algorithm to pause for, so it wouldn't be too fast " +
                "and makes it possible to see the changes on the array as the algorithm is changing it.");
        add(p26);

        Span p27 = createCode("sleep( 100 )");
        add(p27);

        H2 examples = createTitle("Examples");
        add(examples);

        Span pexmp = createSpan("Here are some examples you can try out:");
        add(pexmp);

        H4 bubble = createSubtitle("Bubble sort");
        add(bubble);

        String bubbleContent = """
                for(i = 0; i < size(data) - 1; i = i + 1){
                 	for(j = 0; j < size(data) - 1; j = j + 1){
                 		if(data[j] > data[j + 1]){
                 			swap(data, j, j +1)
                 			sleep(100)
                 		}
                 	}
                 }
                """;
        TextArea bubbleSort = createExample(bubbleContent);
        add(bubbleSort);

        H4 insertion = createSubtitle("Insertion sort");
        add(insertion);

        String insertionContent = """
                for (i = 1; i < size(data); i += 1) {
                   current = data[i]
                   j = i - 1
                                
                   while (j >= 0 && data[j] > current) {
                        swap(data, j+1, j)
                        sleep(100)
                        j -= 1
                    }
                                
                   data[j + 1] = current
                }
                """;
        TextArea insertionSort = createExample(insertionContent);
        add(insertionSort);

        H4 counting = createSubtitle("Counting sort");
        add(counting);

        String countingContent = """
                n = size(data)
                k = 1000
                B = [n]
                C = [k + 1]
                
                for(j = 1; j < n; j += 1){
                    C[data[j]] += 1
                }
                for(i = 1; i < k; i += 1){
                    C[i] = C[i] + C[i - 1]
                }
                for(j = n - 1; j >= 0; j -= 1)
                {
                    B[C[data[j]]] = data[j]
                    C[data[j]] -= 1
                }
                for(i = 0; i < n; i += 1){
                    data[i] = B[i]
                    sleep(50)
                }
                """;
        TextArea countingSort = createExample(countingContent);
        add(countingSort);

        H4 merge = createSubtitle("Merge sort");
        add(merge);

        String mergeContent = """
                function merge(&arr[], left, mid, right)
                {
                	n1 = (mid - left) + 1
                	n2 = right - mid
                		
                	L = [n1]
                	R = [n2]
                	
                	for (i = 0; i < n1; i += 1){
                		L[i] = arr[left + i]
                	}
                	
                	for (j = 0; j < n2; j += 1){
                		R[j] = arr[mid + 1 + j]
                	}
                	
                	i = 0
                	j = 0
                	k = left
                		
                	while (i < n1 && j < n2)
                	{
                		if (L[i] <= R[j])
                		{
                		    arr[k] = L[i]
                		    sleep(50)
                		    i = i + 1
                		}
                		else {
                		     arr[k] = R[j]
                			 sleep(50)
                		     j = j + 1
                		}
                		k = k + 1
                	}
                		
                	while (i < n1) {
                		 arr[k] = L[i]
                		 sleep(50)
                		 i = i + 1
                		 k = k + 1
                	}
                		
                	while (j < n2)
                	{
                		arr[k] = R[j]
                		sleep(50)
                		j = j + 1
                		k = k + 1
                    }
                }
                               
                function mergeSort(&arr[], left, right){
                	if (left >= right){
                		return 0
                	}
                	mid = left + (right - left) / 2
                	mergeSort(arr, left, mid)
                	mergeSort(arr, mid + 1, right)
                	merge(arr, left, mid, right)
                }
                		
                mergeSort(data, 0, size(data) - 1)
                """;
        TextArea mergeSort = createExample(mergeContent);
        add(mergeSort);
    }

    private TextArea createExample(String content)
    {
        TextArea textArea = new TextArea();
        textArea.setReadOnly(true);
        textArea.getStyle().set("margin-left", "20px");
        textArea.setWidth("40%");
        textArea.setHeight("250px");
        textArea.getStyle().set("font-family", "Consolas, 'Courier New', monospace");
        textArea.setValue(content);

        return textArea;
    }

    private Span createSpan(String content)
    {
        Span span = new Span (content);
        span.setWidth("60%");
        span.getStyle().set("margin-left", "10px");
        return span;
    }

    private Span createCode(String content)
    {
        Span span = new Span (content);
        span.setWidth("60%");
        span.getStyle().set("font-weight", "bold");
        span.getStyle().set("margin-left", "20px");
        span.getStyle().set("font-family", "Consolas, 'Courier New', monospace");
        return span;
    }

    private H2 createTitle(String content)
    {
        H2 title = new H2 (content);
        title.getStyle().set("margin-left", "10px");
        return title;
    }

    private H4 createSubtitle(String content)
    {
        H4 title = new H4 (content);
        title.getStyle().set("margin-left", "10px");
        title.getStyle().set("font-weight", "bold");
        return title;
    }

}
