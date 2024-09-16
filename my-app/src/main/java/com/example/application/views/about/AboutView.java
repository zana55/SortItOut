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
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin;

import java.util.ArrayList;

@PageTitle("About custom algorithms")
@Route(value = "about", layout = MainLayout.class)
public class AboutView extends VerticalLayout {

    public AboutView() {
        H2 about = new H2("How it works?");
        about.getStyle().set("margin-left", "10px");
        add(about);

        String text = """
                Your custom algorithm is interpreted by a special interpreter written for this simplified programming language.
                The algorithms that are already implemented are interpreted and executed by the Java runtime environment.
                Because of that, the time it took a custom algorithm and an implemented algorithm to sort an array,
                is not comparable.
                Instead of measuring time, you can visualize the algorithm and see how it works!
                After writing your algorithm, enter the data you want to sort and click Done!
                """;
        Span paragraph = new Span(text);
        paragraph.getStyle().set("margin-left", "10px");
        paragraph.setWidth("60%");
        add(paragraph);

        H2 syntx = new H2("Syntax");
        syntx.getStyle().set("margin-left", "10px");
        add(syntx);

        Span p1 = new Span("Your custom algorithm must be written following these rules.");
        p1.getStyle().set("margin-left", "10px");
        add(p1);

        H4 keywords = new H4("Keywords");
        keywords.getStyle().set("margin-left", "10px");
        add(keywords);

        Span p2 = new Span("There are a few keywords you can use:");
        p2.getStyle().set("margin-left", "10px");
        add(p2);

        Grid<KeywordInfo> grid = new Grid<>();
        grid.addColumn(KeywordInfo::getKeyword).setHeader("Keyword");
        grid.addColumn(KeywordInfo::getAbout).setHeader("About");

        ArrayList<KeywordInfo> items = new ArrayList<>();

        items.add(new KeywordInfo("if", "if( condition ){}"));
        items.add(new KeywordInfo("else", "else{}"));
        items.add(new KeywordInfo("for", "for( initialization; condition; increment/decrement ){}"));
        items.add(new KeywordInfo("break", "break - used inside for-loop"));
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

        Span info = new Span("*function can take as many arguments as you need");
        info.getStyle().set("color", "red");
        info.getStyle().set("margin-left", "10px");
        add(info);

        H4 def = new H4("Defining variables");
        def.getStyle().set("margin-left", "10px");
        add(def);

        Span p3 = new Span("You define new variables without specifying their type:");
        Span p4 = new Span("i = 5");
        Span p5 = new Span("j = i + 2");
        p4.getStyle().set("font-weight", "bold");
        p5.getStyle().set("font-weight", "bold");
        p3.getStyle().set("margin-left", "10px");
        p4.getStyle().set("margin-left", "10px");
        p5.getStyle().set("margin-left", "10px");

        HorizontalLayout variables = new HorizontalLayout(p4, p5);
        variables.setWidth("50%");
        p4.setWidth("25%");
        p5.setWidth("25%");

        add(p3, variables);

        H4 arr = new H4("Arrays");
        arr.getStyle().set("margin-left", "10px");
        add(arr);

        Span p6 = new Span("You can define a new array of size 1 like this :");
        p6.getStyle().set("margin-left", "10px");
        Span p7 = new Span("array = { 5 }");
        p7.getStyle().set("margin-left", "10px");
        Span p8 = new Span("You can define a new array of size 2, like this :");
        p8.getStyle().set("margin-left", "10px");
        Span p9 = new Span("array = { 5, 2 }");
        p9.getStyle().set("margin-left", "10px");
        Span p10 = new Span("You can define a new array of size 5, but full of zeros like this :");
        p10.getStyle().set("margin-left", "10px");
        Span p11 = new Span("array = [ 5 ]");
        p11.getStyle().set("margin-left", "10px");
        Span p12 = new Span("You can access the third element of the array like this :");
        p12.getStyle().set("margin-left", "10px");
        Span p13 = new Span("array[ 3 ]");
        p13.getStyle().set("margin-left", "10px");

        p7.getStyle().set("font-weight", "bold");
        p9.getStyle().set("font-weight", "bold");
        p11.getStyle().set("font-weight", "bold");
        p13.getStyle().set("font-weight", "bold");


        add(p6, p7, p8, p9, p10, p11, p12, p13);

        H2 examples = new H2("Examples");
        examples.getStyle().set("margin-left", "10px");
        add(examples);

        Span pexmp = new Span("Here are some examples you can try out:");
        pexmp.getStyle().set("margin-left", "10px");
        add(pexmp);

        H4 bubble = new H4("Bubble sort");
        bubble.getStyle().set("margin-left", "10px");
        bubble.getStyle().set("font-weight", "bold");
        add(bubble);

        String bubbleContent = """
                for(i = 0; i < size(data) - 1; i = i + 1){
                 	for(j = 0; j < size(data) - 1; j = j + 1){
                 		if(data[j] > data[j + 1]){
                 			swap(data, j, j +1)
                 			sleep(500)
                 		}
                 	}
                 }
                """;
        TextArea bubbleSort = createExample(bubbleContent);
        add(bubbleSort);

        H4 insertion = new H4("Insertion sort");
        insertion.getStyle().set("margin-left", "10px");
        insertion.getStyle().set("font-weight", "bold");
        add(insertion);

        String insertionContent = """
                for(i = 0; i < size(data); i++){
                    current = data[i]
                    for(j = i - 1; j >= 0 && data[j] > current; j--){
                        data[j + 1] = data[j]
                    }
                    data[j + 1] = current;
                }
                """;
        TextArea insertionSort = createExample(insertionContent);
        add(insertionSort);

        H4 counting = new H4("Counting sort");
        counting.getStyle().set("margin-left", "10px");
        counting.getStyle().set("font-weight", "bold");
        add(counting);

        String countingContent = """
                n = size(data)
                k = 1000
                B = [n]
                C = [k + 1]
                
                for(j = 1; j < n; j++){
                    C[data[j]] = C[data[j]] + 1
                }
                for(i = 1; i < k; i++){
                    C[i] = C[i] + C[i - 1]
                }
                for(j = n; j > 1; j--)
                {
                    B[C[data[j]]] = data[j]
                    C[data[j]] = C[data[j]] - 1
                }
                for(i = 0; i < n; i++){
                    data[i] = B[i]
                }
                """;
        TextArea countingSort = createExample(countingContent);
        add(countingSort);
    }

    private TextArea createExample(String content)
    {
        TextArea textArea = new TextArea();
        textArea.setReadOnly(true);
        textArea.setWidth("30%");
        textArea.setHeight("250px");
        textArea.setValue(content);

        return textArea;
    }

}
