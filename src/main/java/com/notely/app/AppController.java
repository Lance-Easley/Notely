package com.notely.app;

import com.notely.app.models.GhostPlaySheet;
import com.notely.app.models.User;
import com.notely.app.repository.GhostPlaySheetsRepository;
import com.notely.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Controller
public class AppController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private GhostPlaySheetsRepository ghostPlayRepo;

    @GetMapping("")
    public String viewHomePage() {
        return "index";
    }

    @GetMapping("/user/play")
    public String viewPianoPage(@RequestParam(name = "id", required = false) Long sheetId, Model model) {
        if (sheetId != null) {
            Optional<GhostPlaySheet> possibleSheet = ghostPlayRepo.findById(sheetId);

            // If sheetId is passed through, find sheet and pass to ghost play
            if (possibleSheet.isPresent()) {
                model.addAttribute("sheetText", possibleSheet.get().getTextContent());
            } else {
                // If the sheet does not exist, pass empty string to ghost play (avoids thymeleaf rendering error)
//                model.addAttribute("sheetText", "");
            }
        }

        return "home";
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());

        return "registry/signup_form";
    }

    @PostMapping("/process_register")
    public String processRegister(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        userRepo.save(user);

        return "registry/register_success";
    }

    @GetMapping("/user/users")
    public String listUsers(Model model) {
        List<User> listUsers = (List<User>) userRepo.findAll();
        model.addAttribute("listUsers", listUsers);

        return "users";
    }

    @GetMapping("/user/delete_account")
    public String deleteUser(Model model) {
        return "registry/delete";
    }

    @PostMapping("/user/delete_success")
    public String processDelete(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            Model model,
            HttpServletRequest request) {
        String userEmail = userDetails.getUsername();
        User user = userRepo.findByEmail(userEmail);

        userRepo.delete(user);

        HttpSession session = request.getSession();
        session.invalidate();
        SecurityContextHolder.clearContext();

        return "registry/delete_success";
    }

    @GetMapping("user/ghostplay")
    public String listSheets(Model model) {
        List<GhostPlaySheet> listSheets = (List<GhostPlaySheet>) ghostPlayRepo.findAll();

        listSheets = listSheets.stream().filter(GhostPlaySheet::getIsPublic).toList();

        model.addAttribute("listSheets", listSheets);

        return "ghostplay/list";
    }

    @GetMapping("user/ghostplay/create")
    public String createSheet(Model model) {
        model.addAttribute("sheet", new GhostPlaySheet());

        return "ghostplay/create";
    }

    @PostMapping("user/ghostplay/create_success")
    public String processSheet(
            GhostPlaySheet ghostPlaySheet,
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        ghostPlaySheet.setAuthorId(userDetails.getId());
        ghostPlayRepo.save(ghostPlaySheet);

        System.out.println(ghostPlaySheet.toString());

        return "ghostplay/create_success";
    }

    @GetMapping("user/ghostplay/{id}")
    public String sheetDetail(@PathVariable("id") long id, Model model) {
        Optional<GhostPlaySheet> possibleSheet = ghostPlayRepo.findById(id);

        GhostPlaySheet sheet;

        if (possibleSheet.isPresent()) {
            sheet = possibleSheet.get();
            model.addAttribute("sheet", sheet);

            Optional<User> possibleAuthor = userRepo.findById(sheet.getAuthorId());

            if (possibleAuthor.isPresent()) {
                User author = possibleAuthor.get();

                model.addAttribute("authorName", author.getFirstName() + " " + author.getLastName());

                return "ghostplay/detail";
            }
        }

        return "ghostplay/sheet_not_exist.html";
    }
}
