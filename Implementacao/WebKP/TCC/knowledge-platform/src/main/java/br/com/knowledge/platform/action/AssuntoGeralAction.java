package br.com.knowledge.platform.action;
import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.knowledge.platform.business.AssuntoGeralBusiness;
import br.com.knowledge.platform.exception.BusinessException;
import br.com.knowledge.platform.modelo.AssuntoGeral;

@Controller
@RequestMapping(value = "/assuntoGeral")
public class AssuntoGeralAction {
	
	public static String ASSUNTO_GERAL_PATH = "/assuntoGeral";
	private static final Logger LOG = Logger.getLogger(AssuntoGeralAction.class);
	
	@Autowired
	private AssuntoGeralBusiness business;
	
	@GetMapping 
	public String novoAssuntoGeral(Model model) {
		LOG.info("Criando um novo assunto geral");
		model.addAttribute(new AssuntoGeral());
		return ASSUNTO_GERAL_PATH;		
	}
	
	@PostMapping
	public String salvarAssuntoGeral(@Valid AssuntoGeral assuntoGeral, BindingResult bindingResult, Model model) {
		LOG.info("Salvando assunto geral");
		
		if (bindingResult.hasErrors()) {
			return ASSUNTO_GERAL_PATH;
		}
		
		model.addAttribute(assuntoGeral);
		
		try {
			business.salvar(assuntoGeral);
		} catch (BusinessException e) {
			ObjectError error = new ObjectError("assuntoGeral", e.getMessage());
			bindingResult.addError(error );
		}
		return ASSUNTO_GERAL_PATH;		
	}

}
